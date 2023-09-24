import uuid

from django.contrib.auth.models import AbstractUser, UserManager
from django.contrib.auth.validators import ASCIIUsernameValidator
from django.db import models
from django.db.models.fields import SlugField
from django.template.defaultfilters import slugify
from django.utils.translation import gettext_lazy as _

from common.models import SoftDeleteBaseModel, TimeAndUUIDStampedBaseModel
from common.validators import username_regex


def upload_image(instance, filename):
    """Upload images to a the user's folder"""
    ext = filename.split(".")[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    return f"{instance.uuid}/avatar/{filename}"


class CustomUser(SoftDeleteBaseModel, AbstractUser, TimeAndUUIDStampedBaseModel):
    """
    custom user created with email as the username field
    """

    username = models.CharField(
        _("username"),
        unique=True,
        max_length=31,
        validators=[ASCIIUsernameValidator(), username_regex],
    )
    email = models.EmailField(
        _("email address"),
        unique=True,
        max_length=100,
    )
    slug = SlugField(max_length=250, unique=True, blank=True)
    first_name = models.CharField(_("first name"), max_length=31, blank=True, null=True)
    last_name = models.CharField(_("last name"), max_length=31, blank=True, null=True)
    address = models.CharField(_("address"), max_length=255, blank=True, null=True)
    profile_image = models.ImageField(upload_to=upload_image, blank=True, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    objects = UserManager()

    def save(self, *args, **kwargs):
        # if not self.slug:
        self.slug = slugify(self.username)
        return super(CustomUser, self).save(*args, **kwargs)

    def __str__(self):
        return self.email
