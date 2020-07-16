import React from 'react';
import MaterialTable from 'material-table';



function setPictureUrl(pictureFile){
  const localImageUrl = URL.createObjectURL(pictureFile);
  // const imageObject = new window.Image();
  // imageObject.onload = () => {
  //   imageFile.width = imageObject.naturalWidth;
  //   imageFile.height = imageObject.naturalHeight;
  //   URL.revokeObjectURL(imageFile);
  // };
  // imageObject.src = localImageUrl;
  return localImageUrl
};


export default function MaterialTableDemo(props) {
  const [state, setState] = React.useState({
    title: props.table_title,
    columns: props.table_columns,
    data: props.table_datas,
  });


  return (
    <div>
    { props.product ?
      (
        <MaterialTable
          title={state.title}
          columns={state.columns}
          data={state.data}
          options={{
            actionsColumnIndex: -1
          }}
          actions={[
            {
              icon: 'edit',
              tooltip: 'Modifier catalogue',
              onClick: (event, rowData) => {props.addProduct()}
            }
          ]}
        />
      )
      :
      (
        <MaterialTable
          title={state.title}
          columns={state.columns}
          data={state.data}
          editable={{
            onRowUpdateCancelled: rowData => props.clearPicture ? props.clearPicture() : null,
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      // Check there if is a table with image field
                      if (props.img_table){
                        // Check if the user has loaded an image file before, otherwise show an alert
                        if(props.file){
                          newData['picture'] = setPictureUrl(props.file)
                          // Handle method to update data here
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        } else {
                          props.setPictureError()
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        }
                      } else {
                        // Handle method to update data here
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      }
                    });
                  }
                }, 600)
                // This method will clean picture updating
                if (props.img_table){
                  props.clearPicture()
                };
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
          options={{
            actionsColumnIndex: -1
          }}
          // actions={[
          //   {
          //     icon: 'edit',
          //     tooltip: 'Modifier catalogue',
          //     onClick: (event, rowData) => props.handleEditRow
          //   }
          // ]}
        />
      )
    }
  </div>
  );
}
