import React, { useEffect, useState } from "react";
import axios from "axios";

import CreateMain from "../components/CreateMain";
import AllMain from "../components/AllMain";

const Main = () => {
    const [projects, setProjects] = useState()
    const [refresh, setRefresh] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/all`)
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    const reload = () => {
        setRefresh(!refresh)
    }

    return (
        <fieldset>
            <legend><h1><strong></strong></h1></legend>
            <CreateMain reload={reload}/>
            {
                projects &&
                <AllMain projects={projects} reload = {reload}/>
            }
        </fieldset>
    )
}

export default Main