from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = (
        "username",
        "email",
        "is_staff",
        "is_active",
        "slug",
        "first_name",
        "last_name",
        "address",
        "created_at",
        "updated_at",
    )
    list_filter = (
        "username",
        "email",
        "is_staff",
        "is_active",
        "slug",
        "first_name",
        "last_name",
        "address",
        "created_at",
        "updated_at",
    )
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "username",
                    "email",
                    "password",
                    "slug",
                    "created_at",
                    "updated_at",
                )
            },
        ),
        ("Permissions", {"fields": ("is_staff", "is_active")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "email",
                    "first_name",
                    "last_name",
                    "address",
                    "password1",
                    "password2",
                    "is_staff",
                    "is_active",
                    "slug",
                    "created_at",
                    "updated_at",
                ),
            },
        ),
    )
    search_fields = ("email",)
    ordering = ("email",)


admin.site.register(CustomUser, CustomUserAdmin)
