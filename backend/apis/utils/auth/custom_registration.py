from datetime import datetime

from allauth.account.utils import setup_user_email
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from backend.models import UserProfile
from allauth.account.adapter import get_adapter
from rest_framework.serializers import ModelSerializer


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["gender", "title", "country", "city", "phone_number", "birth_date", "first_name", "last_name"]


class CustomRegistrationSerializer(RegisterSerializer):
    # TODO (iroue stephane) adds custom logic if the default one doesnt fit
    title = serializers.CharField(required=True)
    address = serializers.CharField(required=False)
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    city = serializers.CharField(required=True)
    country = serializers.CharField(required=True)
    gender = serializers.CharField(required=True)
    birth_date = serializers.DateField(required=False)
    phone_number = serializers.CharField(required=True)

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),

            'title': self.validated_data.get('title', None),
            'address': self.validated_data.get('address', None),
            'last_name': self.validated_data.get('last_name', None),
            'first_name': self.validated_data.get('first_name', None),
            'city': self.validated_data.get('city', None),
            'country': self.validated_data.get('country', None),
            'birth_date': self.validated_data.get('birth_date', None),
            'gender': self.validated_data.get('gender', None),
            'phone_number': self.validated_data.get('phone_number', None),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        u1 = adapter.save_user(request, user, self)
        dta = {
            "title": self.cleaned_data["title"],
            "address": self.cleaned_data["address"],
            "city": self.cleaned_data["city"],
            "country": self.cleaned_data["country"],
            "last_name": self.cleaned_data["last_name"],
            "first_name": self.cleaned_data["first_name"],
            "gender": self.cleaned_data["gender"],
            "birth_date": datetime(int(request.data["birth_year"]), int(request.data["birth_month"]),
                                   int(request.data["birth_day"])),
            "phone_number": self.cleaned_data["phone_number"],
        }

        s = UserProfileSerializer(data=dta)
        UserProfile.objects.create(user=u1, **dta)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])

        response = {
            "message ": 'User created successfully',
        }
        return user