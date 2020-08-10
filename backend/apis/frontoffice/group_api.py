from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers
from backend.models import Group

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date", "is_published"]


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        exclude = exclude_fields


class GroupAPIView(APIView):

    @staticmethod
    def get(request):
        groups = Group.objects.all()
        return Response(GroupSerializer(groups, many=True, context={"request": request}).data)


class GroupSingleAPIView(APIView):
    # permission_classes = (AllowAny,)

    def get(self, request, slug):
        group = Group.objects.get(slug=slug)
        return Response(GroupSerializer(group, context={"request": request}).data)
