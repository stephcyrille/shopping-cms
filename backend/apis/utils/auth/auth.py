
from django.contrib.auth import get_user_model
from rest_framework import serializers
from backend.models import UserProfile

exclude_fields = ["created_date", "modified_date", "user"]


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        exclude = exclude_fields


class CustomUserDetailsSerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer()
    """
    User model w/o password
    """

    class Meta:
        model = get_user_model()
        fields = ('username', 'email', "userprofile")
        read_only_fields = ('email',)