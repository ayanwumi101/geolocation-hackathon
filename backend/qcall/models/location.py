from django.db import models
from django.contrib.auth import get_user_model

from common.models import TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel


class Location(TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel):
    """
    Location model
    """

    name = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    rating = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.name


class LocationImage(TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel):
    """
    Location image model
    """

    location = models.ForeignKey(
        Location, on_delete=models.CASCADE, related_name="location_images"
    )
    image = models.ImageField(upload_to="location_images", null=True, blank=True)

    def __str__(self):
        return str(self.location.name)


class LocationContactType(TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel):
    """
    Location contact type model
    """

    name = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name


class LocationContact(TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel):
    """
    Location contact model
    """

    location = models.ForeignKey(
        Location, on_delete=models.CASCADE, related_name="location_contacts"
    )
    location_contact_type = models.ForeignKey(
        LocationContactType,
        on_delete=models.CASCADE,
        related_name="location_contacts_type",
    )
    contact_phone_number = models.CharField(max_length=255, null=True, blank=True)
    contact_email = models.CharField(max_length=255, null=True, blank=True)
    contact_website = models.CharField(max_length=255, null=True, blank=True)


class LocationComment(TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel):
    """
    Location comment model
    """

    location = models.ForeignKey(
        Location, on_delete=models.CASCADE, related_name="comments"
    )
    comment = models.TextField(null=True, blank=True)
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name="location_comments",
        null=True,
        blank=True,
    )

    def __str__(self):
        return str(self.location.name)
