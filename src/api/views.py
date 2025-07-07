from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.paginator import Paginator
from django.db.models import Q
import json
from .models import BlogPost, Project, ContactMessage, Newsletter, Category, Tag


@csrf_exempt
@require_http_methods(["GET"])
def blog_posts(request):
    """Get all published blog posts with pagination"""
    try:
        # Get query parameters
        page = request.GET.get("page", 1)
        per_page = request.GET.get("per_page", 10)
        category = request.GET.get("category")
        search = request.GET.get("search")

        # Filter published posts
        posts = BlogPost.objects.filter(status="published")

        # Apply filters
        if category:
            posts = posts.filter(category__slug=category)

        if search:
            posts = posts.filter(
                Q(title__icontains=search)
                | Q(content__icontains=search)
                | Q(excerpt__icontains=search)
            )

        # Paginate
        paginator = Paginator(posts, per_page)
        page_obj = paginator.get_page(page)

        # Serialize data
        data = {
            "posts": [
                {
                    "id": post.id,
                    "title": post.title,
                    "slug": post.slug,
                    "excerpt": post.excerpt,
                    "featured_image": post.featured_image,
                    "category": (
                        {"name": post.category.name, "slug": post.category.slug}
                        if post.category
                        else None
                    ),
                    "tags": [
                        {"name": tag.name, "slug": tag.slug, "color": tag.color}
                        for tag in post.tags.all()
                    ],
                    "published_at": (
                        post.published_at.isoformat() if post.published_at else None
                    ),
                    "reading_time": post.reading_time,
                    "views": post.views,
                }
                for post in page_obj
            ],
            "pagination": {
                "current_page": page_obj.number,
                "total_pages": paginator.num_pages,
                "total_posts": paginator.count,
                "has_next": page_obj.has_next(),
                "has_previous": page_obj.has_previous(),
            },
        }

        return JsonResponse(data)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def blog_post_detail(request, slug):
    """Get a single blog post by slug"""
    try:
        post = BlogPost.objects.get(slug=slug, status="published")

        # Increment views
        post.views += 1
        post.save(update_fields=["views"])

        data = {
            "id": post.id,
            "title": post.title,
            "slug": post.slug,
            "content": post.content,
            "excerpt": post.excerpt,
            "featured_image": post.featured_image,
            "category": (
                {
                    "name": post.category.name,
                    "slug": post.category.slug,
                    "description": post.category.description,
                }
                if post.category
                else None
            ),
            "tags": [
                {"name": tag.name, "slug": tag.slug, "color": tag.color}
                for tag in post.tags.all()
            ],
            "author": {
                "username": post.author.username,
                "first_name": post.author.first_name,
                "last_name": post.author.last_name,
            },
            "published_at": (
                post.published_at.isoformat() if post.published_at else None
            ),
            "updated_at": post.updated_at.isoformat(),
            "reading_time": post.reading_time,
            "views": post.views,
        }

        return JsonResponse(data)

    except BlogPost.DoesNotExist:
        return JsonResponse({"error": "Post not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def projects(request):
    """Get all projects"""
    try:
        projects_qs = Project.objects.filter(status__in=["active", "completed"])

        data = {
            "projects": [
                {
                    "id": project.id,
                    "title": project.title,
                    "slug": project.slug,
                    "description": project.description,
                    "short_description": project.short_description,
                    "image": project.image,
                    "github_url": project.github_url,
                    "live_url": project.live_url,
                    "technologies": project.technologies,
                    "status": project.status,
                    "featured": project.featured,
                    "created_at": project.created_at.isoformat(),
                    "updated_at": project.updated_at.isoformat(),
                }
                for project in projects_qs
            ]
        }

        return JsonResponse(data)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def project_detail(request, slug):
    """Get a single project by slug"""
    try:
        project = Project.objects.get(slug=slug)

        data = {
            "id": project.id,
            "title": project.title,
            "slug": project.slug,
            "description": project.description,
            "short_description": project.short_description,
            "image": project.image,
            "github_url": project.github_url,
            "live_url": project.live_url,
            "technologies": project.technologies,
            "status": project.status,
            "featured": project.featured,
            "created_at": project.created_at.isoformat(),
            "updated_at": project.updated_at.isoformat(),
        }

        return JsonResponse(data)

    except Project.DoesNotExist:
        return JsonResponse({"error": "Project not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def contact(request):
    """Handle contact form submissions"""
    try:
        data = json.loads(request.body)

        # Validate required fields
        required_fields = ["name", "email", "subject", "message"]
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({"error": f"{field} is required"}, status=400)

        # Create contact message
        contact_message = ContactMessage.objects.create(
            name=data["name"],
            email=data["email"],
            subject=data["subject"],
            message=data["message"],
        )

        # Here you could add email sending logic
        # send_email_notification(contact_message)

        return JsonResponse(
            {
                "message": "Thank you for your message! I will get back to you soon.",
                "success": True,
            }
        )

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def newsletter_subscribe(request):
    """Handle newsletter subscriptions"""
    try:
        data = json.loads(request.body)

        email = data.get("email")
        if not email:
            return JsonResponse({"error": "Email is required"}, status=400)

        # Create or update newsletter subscription
        newsletter, created = Newsletter.objects.get_or_create(
            email=email, defaults={"active": True}
        )

        if not created and not newsletter.active:
            newsletter.active = True
            newsletter.save()

        return JsonResponse(
            {"message": "Successfully subscribed to newsletter!", "success": True}
        )

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def categories(request):
    """Get all categories"""
    try:
        categories_qs = Category.objects.all()

        data = {
            "categories": [
                {
                    "id": category.id,
                    "name": category.name,
                    "slug": category.slug,
                    "description": category.description,
                    "post_count": category.blogpost_set.filter(
                        status="published"
                    ).count(),
                }
                for category in categories_qs
            ]
        }

        return JsonResponse(data)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def tags(request):
    """Get all tags"""
    try:
        tags_qs = Tag.objects.all()

        data = {
            "tags": [
                {
                    "id": tag.id,
                    "name": tag.name,
                    "slug": tag.slug,
                    "color": tag.color,
                    "post_count": tag.blogpost_set.filter(status="published").count(),
                }
                for tag in tags_qs
            ]
        }

        return JsonResponse(data)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
