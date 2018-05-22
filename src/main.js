import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { starter } from './triangletracker.js';

$(document).ready(function() {
  $('#triangle-tracker-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = starter(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
