
// Redux action
export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}

export function uploadDocumentRequest({ file, name }) {
  
}

/*
 ... A lot of Redux / React boilerplate happens here
 like mapDispatchToProps and mapStateToProps and @connect ...
*/

// Component method
handleFileUpload({ file }) {
  const file = files[0];
  this.props.actions.uploadRequest({
     file,
     name: 'Awesome Cat Pic'
  })
}

// Component render
<input type="file" onChange={this.handleFileUpload} />
