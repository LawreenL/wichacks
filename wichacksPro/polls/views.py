from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Question
from django.template import loader, RequestContext
# Create your views here.
def index(request):
    latest_questions = Question.objects.order_by('-pub_date')[:5]
    return render(request, 'polls/index.html', {'latest_questions': latest_questions})


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html',{'question':question})

def results(request, question_id):
    return HttpResponse("these are the results of the question: %s" % question_id)

def vote(request, question_id):
    return HttpResponse("vote on question: %s" % question_id)