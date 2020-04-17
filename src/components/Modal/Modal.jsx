import React from 'react';
import M from 'materialize-css';


const Modal = ({movie}) => {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, null);
    });
console.log(movie);

    return (
        <div>
            <h1>{movie.name}</h1>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

            <div id="modal1" class="modal modal-fixed-footer">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </div>
    )
}

export default Modal ;