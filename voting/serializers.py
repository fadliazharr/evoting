from rest_framework import serializers
from .models import EncryptedVote

class EncryptedVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = EncryptedVote
        fields = '__all__'
