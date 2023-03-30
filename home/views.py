from django.shortcuts import render

# Create your views here.
def home_screen_view(request):
    context = {
        'name': 'Nikhil Ailani',
        'licenses': ['G1', 'Smart Serve'],
        'code_snippet_text': 'This is a code snippet text'
    }
    return render(request, 'home/index.html', context)
