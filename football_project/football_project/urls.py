"""
URL configuration for football_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from topscorers.views import get_top_scorers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('topscorers/<int:league_id>/', get_top_scorers, name='get_top_scorers'),
]


# from django.contrib import admin
# from django.urls import path
# from nextmatchapp.views import get_next_games

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('next-games/<time_id>/', get_next_games, name='get_next_games'),
# ]