from django.shortcuts import render

import os
import requests
from django.http import JsonResponse

API_KEY = "1bdeae2cb36348594c29eebadfaf1b69ce6656a4f71fc0f720d7acae491123cc"

def get_top_scorers(request, league_id):
    url = f"https://apiv3.apifootball.com/?action=get_topscorers&{league_id}=152&APIkey={API_KEY}"
    
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data)
