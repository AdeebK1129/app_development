from django.contrib import admin
# import the Post Model
from .models import Post

# Register your models here.
admin.site.register(Post)
