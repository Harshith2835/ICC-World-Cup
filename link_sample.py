import urllib.parse

# Define the base URL
base_url = 'https://example.com/images/'

# Define the image filename
filename = 'Indian Batsmen Solo Plot/Virat Kohli.png'

# Define any query parameters
params = {'width': 100, 'height': 100}

# Construct the URL
url_parts = list(urllib.parse.urlparse(base_url))
url_parts[2] = url_parts[2].rstrip('/') + '/' + filename
url_parts[4] = urllib.parse.urlencode(params)
url = urllib.parse.urlunparse(url_parts)

print(url)
