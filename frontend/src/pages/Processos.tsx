import React, { Component } from "react";
import DataGrid from "../components/DataGrid";
import SimpleModal from "../components/SimpleModal";
import processoService from "../services/processoService";
import usuarioService from "../services/usuarioService";

import {
  Button,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Input,
  Checkbox,
} from "@material-ui/core";
import { Add, Save, Edit, Delete } from "@material-ui/icons";

class Processos extends Component {
  async componentDidMount() {
    const processos = await processoService.get();
    const usuarios = await usuarioService.get();

    this.setState({ processos: processos, usuarios: usuarios });
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  setProcesso = (item: any) => {
    this.setState({
      novoProcesso: item,
    });
    this.toggleModal();
  };

  deleteProcesso = async (item: any) => {
    if ((await processoService.delete(item.id)) != null) {
      this.setState({
        processos: this.state.processos.filter((f) => (f as any).id !== item.id),
      });
    }
  };

  saveProcesso = async () => {
    await processoService.add(this.state.novoProcesso);
    const processos = await processoService.get();

    if (processos != null) {
      this.setState({
        processos: processos,
        novoProcesso: this.resetProcesso(),
      });
    }

    this.toggleModal();
  };

  resetProcesso() {
    return {
      id: 0,
      nome: "",
      parecer: false,
      usuarios: []
    };
  }

  state = {
    processos: [],
    usuarios: [],
    columns: [
      {
        name: "Nome",
        value: "nome",
      },
      {
        name: "Parecer",
        value: "parecer",
        cellTemplate: <Checkbox />,
      },
      {
        name: "Usuario",
        value: "usuarios",
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
          this.deleteProcesso(item);
        },
      },
    ],
    modalOpen: false,
    novoProcesso: {
      id: 0,
      nome: "",
      parecer: false,
      usuarios: [],
    },
  };

  render() {
    const {
      modalOpen,
      columns,
      processos,
      novoProcesso,
      usuarios,
    } = this.state;
    const { toggleModal, saveProcesso } = this;

    return (
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={6} justify="flex-start">
            <h2>Processos</h2>
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
            <DataGrid columns={columns} rows={processos as any} />
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
                value={novoProcesso.nome}
                onChange={(e) => {
                  this.setState({
                    novoProcesso: { ...novoProcesso, nome: e.target.value },
                  });
                }}
              />
            </Grid>
            <Grid xs={6} container item>
              <FormControl style={{ minWidth: 250 }} variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Usuarios de parecer
                </InputLabel>
                <Select
                  labelId="demo-mutiple-chip-label"
                  id="demo-mutiple-chip"
                  multiple
                  value={novoProcesso.usuarios}
                  onChange={(e) => {
                    this.setState({
                      novoProcesso: {
                        ...novoProcesso,
                        usuarios: e.target.value,
                      },
                    });
                  }}
                  input={<Input id="select-multiple-chip" />}
                >
                  {(usuarios as any).map((usuario: any) => (
                    <MenuItem key={usuario.id} value={usuario.id}>
                      {usuario.nome}
                    </MenuItem>
                  ))}
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
                saveProcesso();
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

export default Processos;
