from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EncryptedVoteViewSet

router = DefaultRouter()
router.register(r'votes', EncryptedVoteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
