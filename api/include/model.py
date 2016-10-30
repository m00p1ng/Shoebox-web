import re

def to_slug(string):
    string = re.sub(r"[^\w\s]", '', string)
    string = re.sub(r"\s+", '-', string)
    return string.lower()

def timestamp_date(timestamp):
    to_date = {}
    to_date['year'] = timestamp.year
    to_date['month'] = timestamp.month
    to_date['day'] = timestamp.day
    return to_date

def timestamp_fulldate(timestamp):
    to_date = {}
    to_date['year'] = timestamp.year
    to_date['month'] = timestamp.month
    to_date['day'] = timestamp.day
    to_date['hour'] = timestamp.hour
    to_date['minute'] = timestamp.minute
    to_date['second'] = timestamp.second
    return to_date
