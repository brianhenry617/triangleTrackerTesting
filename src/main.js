import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { triangle } from './triangletracker.js';

$(document).ready(function() {
  $('#triangle-tracker-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = triangle(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
