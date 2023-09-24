from django.db import models

from common.models import TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel


class EmergencyAlert(TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel):
    """
    Emergency alert model
    """

    title = models.CharField(max_length=255, null=True, blank=True)
    emergency_type = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    time_started = models.DateTimeField(null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title


class EmergencyAlertImage(TimeAndUUIDStampedBaseModel, SoftDeleteBaseModel):
    """
    Emergency alert image model
    """

    emergency_alert = models.ForeignKey(
        EmergencyAlert, on_delete=models.CASCADE, related_name="images"
    )
    image = models.ImageField(upload_to="emergency_alert_images", null=True, blank=True)

    def __str__(self):
        return str(self.emergency_alert.title)
