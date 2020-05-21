import uuid

from django.db import models
from django.utils import timezone

from backend.models import UserProfile, Cart


class CoreSession(models.Model):
    uuid = models.CharField(max_length=36, null=True, blank=True)
    profile = models.ForeignKey(UserProfile, null=True, blank=True, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, null=True, blank=True, on_delete=models.CASCADE)
    created_date = models.DateTimeField(blank=True, default=timezone.now)
    expiration_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.uuid

    def save(self, *args, **kwargs):
        """ On save, update timestamps """
        if not self.id:
            # For Cart creation
            _uuid = str(uuid.uuid4())
            tab_uuid = _uuid.split('-')
            cart_uuid = (tab_uuid[0] + tab_uuid[3]).upper()
            cart = Cart(ref=cart_uuid)
            cart.save()
            # For session
            self.created_date = timezone.now()
            self.expiration_date = (self.created_date + timezone.timedelta(days=7))
            self.uuid = str(uuid.uuid4())
            self.cart = cart
        return super(CoreSession, self).save(*args, **kwargs)
