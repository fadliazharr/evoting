from djongo import models

class EncryptedVote(models.Model):
    voter_id = models.CharField(max_length=100, unique=True)
    encrypted_vote = models.TextField()

    def __str__(self):
        return self.voter_id
