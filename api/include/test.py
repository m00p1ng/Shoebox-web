from django.test import Client

json_type = "application/json"

def create_request(link, json_string):
    c = Client()
    res = c.post(link, data=json_string, content_type=json_type)
    return res

def update_request(link, json_string):
    c = Client()
    res = c.put(link, data=json_string, content_type=json_type)
    return res
