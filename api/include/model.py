import re

def to_slug(string):
    string = re.sub(r"[^\w\s]", '', string)
    string = re.sub(r"\s+", '-', string)
    return string.lower()

def timestamp_date(timestamp):
    to_date = {}

    if timestamp.day < 10:
        to_date['day'] = '0' + str(timestamp.day)
    else:
        to_date['day'] = str(timestamp.day)

    if timestamp.month < 10:
        to_date['month'] = '0' + str(timestamp.month)
    else:
        to_date['month'] = str(timestamp.month)

    to_date['year'] = str(timestamp.year)
    return to_date

def timestamp_fulldate(timestamp):
    to_date = {}
    
    if timestamp.day < 10:
        to_date['day'] = '0' + str(timestamp.day)
    else:
        to_date['day'] = str(timestamp.day)

    if timestamp.month < 10:
        to_date['month'] = '0' + str(timestamp.month)
    else:
        to_date['month'] = str(timestamp.month)

    to_date['year'] = str(timestamp.year)

    if timestamp.hour < 10:
        to_date['hour'] = '0' + str(timestamp.hour)
    else:
        to_date['hour'] = str(timestamp.hour)

    if timestamp.minute < 10:
        to_date['minute'] = '0' + str(timestamp.minute)
    else:
        to_date['minute'] = str(timestamp.minute)

    if timestamp.second < 10:
        to_date['second'] = '0' + str(timestamp.second)
    else:
        to_date['second'] = str(timestamp.second)

    return to_date
