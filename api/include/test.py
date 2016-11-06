from django.test import Client

def create_request(link, json_string):
    c = Client()
    res = c.post(link, data=json_string, content_type="application/json")
    return res

def update_request(link, json_string):
    c = Client()
    res = c.put(link, data=json_string, content_type="application/json")
    return res
