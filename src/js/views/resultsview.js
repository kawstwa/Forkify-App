import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // "url:" must be written in the beginning of the path for static files

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please, try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
