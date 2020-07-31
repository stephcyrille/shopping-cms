from rest_framework.utils import html


def get_upload_host(request):
    return "{0}://{1}".format(request.scheme, request.get_host())


def getFromRequestData(dictionary, key):
    if html.is_html_input(dictionary):
        return html.parse_html_dict(dictionary, prefix=key) or None
    return dictionary.get(key, None)