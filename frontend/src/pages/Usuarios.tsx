import React, { Component } from "react";
import DataGrid from "../components/DataGrid";
import SimpleModal from "../components/SimpleModal";
import {
  Button,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Add, Save, Edit, Delete } from "@material-ui/icons";
import usuarioService from "../services/usuarioService";

class Usuarios extends Component {
  async componentDidMount() {
    const usuarios = await usuarioService.get();
    this.setState({ usuarios: usuarios });
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  updateUsuario = async (item: any) => {
    if ((await usuarioService.update(item)) != null) {
      this.setState({
        usuarios: [
          ...this.state.usuarios.filter((f) => (f as any).id !== item.id),
          item,
        ],
        novoUsuario: this.resetUsuario(),
      });
      this.toggleModal();
    }
  };

  setUsuario = (item: any) => {
    this.setState({
      novoUsuario: item,
    });
    this.toggleModal();
  };

  deleteUsuario = async (item: any) => {
    if ((await usuarioService.delete(item.id)) != null) {
      this.setState({
        usuarios: this.state.usuarios.filter((f) => (f as any).id !== item.id),
      });
    }
  };

  saveUsuario = async () => {
    await usuarioService.add(this.state.novoUsuario);
    const usuarios = await usuarioService.get();

    if (usuarios != null) {
      this.setState({
        usuarios: usuarios,
        novoUsuario: this.resetUsuario(),
      });
    }

    this.toggleModal();
  };

  resetUsuario() {
    return {
      id: 0,
      nome: "",
      status: "Admin",
    };
  }

  state = {
    usuarios: [],
    columns: [
      {
        name: "Nome",
        value: "nome",
      },
      {
        name: "Status",
        value: "status",
      },
      {
        name: "",
        value: "options",
        width: 40,
        cellTemplate: (
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Edit />}
          >
            Editar
          </Button>
        ),
        onclick: (item: any) => {
          this.setUsuario(item);
        },
      },
      {
        name: "",
        width: 40,
        value: "options",
        cellTemplate: (
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Delete />}
          >
            Deletar
          </Button>
        ),
        onclick: (item: any) => {
          this.deleteUsuario(item);
        },
      },
    ],
    modalOpen: false,
    novoUsuario: {
      id: 0,
      nome: "",
      status: "Admin",
    },
  };

  render() {
    const { modalOpen, columns, usuarios, novoUsuario } = this.state;
    const { toggleModal, saveUsuario, updateUsuario } = this;

    return (
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={6} justify="flex-start">
            <h2>Usuarios</h2>
          </Grid>
          <Grid container justify="flex-end" item xs={6} spacing={3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={toggleModal}
              startIcon={<Add />}
            >
              Novo
            </Button>
          </Grid>

          <Grid container>
            <DataGrid columns={columns} rows={usuarios as any} />
          </Grid>
        </Grid>

        <SimpleModal toggleModal={toggleModal} open={modalOpen}>
          <Grid container xs={12} item>
            <h4>Adicione os dados abaixo:</h4>
          </Grid>

          <Grid container spacing={3}>
            <Grid container xs={6} item>
              <TextField
                required
                id="outlined-required"
                label="Nome"
                defaultValue="Novo Usuario"
                variant="outlined"
                value={novoUsuario.nome}
                onChange={(e) => {
                  this.setState({
                    novoUsuario: { ...novoUsuario, nome: e.target.value },
                  });
                }}
              />
            </Grid>
            <Grid xs={6} container item>
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={novoUsuario.status}
                  onChange={(e) => {
                    this.setState({
                      novoUsuario: { ...novoUsuario, status: e.target.value },
                    });
                  }}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Triador">Triador</MenuItem>
                  <MenuItem value="Finalizador">Finalizador</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container justify="flex-end" xs item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                novoUsuario.id === 0
                  ? saveUsuario()
                  : updateUsuario(novoUsuario);
              }}
              startIcon={<Save />}
            >
              Salvar
            </Button>
          </Grid>
        </SimpleModal>
      </div>
    );
  }
}

export default Usuarios;
