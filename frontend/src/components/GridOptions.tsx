import React, { Component } from "react";
import {
  Button
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";


type Props ={
    editClick: any,
    deleteClick: any
}

class Usuarios extends Component<Props> {
 
  render() {
    const { editClick, deleteClick} = this.props;
    return (
      <div>
         
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={deleteClick}
              startIcon={<Delete />}
            >
              Salvar
            </Button>    
      </div>
    );
  }
}

export default Usuarios;
