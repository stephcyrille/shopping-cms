def get_upload_host(request):
    return "{0}://{1}".format(request.scheme, request.get_host())