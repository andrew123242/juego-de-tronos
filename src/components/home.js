import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
const data =[
    {id: "1", partes: "Pierna Derecha", cantidad: "1"},
    {id: 2, partes: "Ojos", cantidad: "2", },
    {id: 3, partes: "boca", cantidad: "1"}
    
];
class Empleados extends React.Component{

        state = {
          data: data,
          modalActualizar: false,
          modalInsertar: false,
          form: {
            partes: "",
            cantidad: "",
          },
        };
      
        mostrarModalActualizar = (dato) => {
          this.setState({
            form: dato,
            modalActualizar: true,
          });
        };
      
        cerrarModalActualizar = () => {
          this.setState({ modalActualizar: false });
        };
      
        mostrarModalInsertar = () => {
          this.setState({
            modalInsertar: true,
          });
        };
      
        cerrarModalInsertar = () => {
          this.setState({ modalInsertar: false });
        };
      
        editar = (dato) => {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id == registro.id) {
              arreglo[contador].partes = dato.partes;
              arreglo[contador].cantidad = dato.cantidad;
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        };
      
        eliminar = (dato) => {
          var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
          if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
              if (dato.id == registro.id) {
                arreglo.splice(contador, 1);
              }
              contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
          }
        };
        insertar= ()=>{
          var valorNuevo= {...this.state.form};
          valorNuevo.id=this.state.data.length+1;
          var lista= this.state.data;
          lista.push(valorNuevo);
          this.setState({ modalInsertar: false, data: lista });
        }
        handleChange = (e) => {
          this.setState({
            form: {
              ...this.state.form,
              [e.target.name]: e.target.value,
            },
          });
        };
        render() {
          return (
            <>
              <Container className="table table-dark">
              <br />
                <Button color="success" onClick={()=>this.mostrarModalInsertar()}>agregar</Button>
                <br />
                <br />
                <Table>
                  <thead>
                    <tr>
                      <th>partes</th>
                      <th>cantidad</th>
                    </tr>
                  </thead>
      
                  <tbody>
                    {this.state.data.map((dato) => (
                      <tr key={dato.id}>
                        <td>{dato.partes}</td>
                        <td>{dato.cantidad}</td>
                    <td>{dato.FechaIngreso }</td>
                        <td>
                          <Button
                            color="primary"
                            onClick={() => this.mostrarModalActualizar(dato)}
                          >
                            Editar
                          </Button>{" "}
                          <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
      
              <Modal isOpen={this.state.modalActualizar}>
                <ModalHeader>
                 <div><h3>Editar Registro</h3></div>
                </ModalHeader>
      
                <ModalBody>
                  <FormGroup>
                    <label>
                      parte: 
                    </label>
                    <input
                      className="form-control"
                      name="parte"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.form.partes}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label>
                      cantidad: 
                    </label>
                    <input
                      className="form-control"
                      name="cantidad"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.form.cantidad}
                    />
                  </FormGroup>
                </ModalBody>
      
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => this.editar(this.state.form)}
                  >
                    Editar
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => this.cerrarModalActualizar()}
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
    
              <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                 <div><h3>Partes recuperadas</h3></div>
                </ModalHeader>
      
                <ModalBody>
               
                  <FormGroup>
                      <label>id:</label>
                    <input
                      className="form-control"
                      readOnly
                      type="text"
                      value={this.state.data.length+1}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label>
                      partes: 
                    </label>
                    <input
                      className="form-control"
                      name="partes"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label>
                      cantidad: 
                    </label>
                    <input
                      className="form-control"
                      name="cantidad"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </ModalBody>
      
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => this.insertar()}
                  >
                    Insertar
                  </Button>
                  <Button
                    className="btn btn-danger"
                    onClick={() => this.cerrarModalInsertar()}
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
            <div><NavLink to='/' className='btn btn-dark' >Volver</NavLink></div>
            </>
          );
        }
      }
export default Empleados;