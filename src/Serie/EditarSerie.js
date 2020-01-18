import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const EditarSerie = ({ match }) => {
    const [name, setName] = useState("");

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        axios
            .get("/api/series/" + match.params.id)
            .then(res => {
                setName(res.data.name);
            })
    }, [match.params.id]);

    const onChange = evt => {
        setName(evt.target.value);
    }

    const save = () => {
        axios
            .put("/api/series/" + match.params.id, {
                name
            })
            .then(res => {
                setSuccess(true);
            });
    }

    if (success) {
        return <Redirect to="/series" />
    }

    return (
        <div className="container">
            <h1>Editar Série</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        value={name}
                        onChange={onChange}
                        className="form-control"
                        id="nome"
                        placeholder="Nome da Série" />
                </div>

                <button type="button" className="btn btn-primary" onClick={save}>Salvar</button>

            </form>
        </div>
    );
}

export default EditarSerie;