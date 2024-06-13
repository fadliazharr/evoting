from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import EncryptedVote
from .serializers import EncryptedVoteSerializer
from Pyfhel import Pyfhel, PyCtxt

# Initialize Pyfhel
HE = Pyfhel()
HE.contextGen(p=65537)
HE.keyGen()

class EncryptedVoteViewSet(viewsets.ModelViewSet):
    queryset = EncryptedVote.objects.all()
    serializer_class = EncryptedVoteSerializer

    def create(self, request, *args, **kwargs):
        # Encrypt the vote
        plaintext_vote = request.data['vote']
        encrypted_vote = HE.encryptInt(int(plaintext_vote))

        # Save to MongoDB
        vote = EncryptedVote(voter_id=request.data['voter_id'], encrypted_vote=str(encrypted_vote))
        vote.save()

        return Response({'status': 'vote recorded'})
