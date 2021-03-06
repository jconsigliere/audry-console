'use strict';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ImageUpload from 'components/ImageUpload.js';

export default domRoot => {
  $('#nav_item_save a').data('target-form', $('#hospital_form'));
  $('#nav_item_back a').addClass('disabled');

  ReactDOM.render(
    <div>
      <ImageUpload
        title="Dark Background"
        placeholderImage="/assets/logo-placeholder-dark-bg.png"
        name="logoDarkFileName"
        className="mb-1"
        previewDivClassName="bg-inverse"
        required
      />
      <ImageUpload
        title="Light Background"
        placeholderImage="/assets/logo-placeholder-light-bg.png"
        name="logoLightFileName"
        required
      />
    </div>,
    document.getElementById('logo-upload-container')
  );
};
