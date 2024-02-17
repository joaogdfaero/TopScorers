from django.shortcuts import render
import os
import requests
import json
from django.http import JsonResponse

API_KEY = os.environ.get('API_KEY')


def get_top_scorers(request, league_id):
    url = f"https://apiv3.apifootball.com/?action=get_topscorers&league_id={league_id}&APIkey={API_KEY}"

    response = requests.get(url)
    data = response.json()
    
    if isinstance(data, dict):
        return JsonResponse(data)
    else:
        json_data = json.dumps(data)
        return JsonResponse(json_data, safe=False)
