import { useParams } from "react-router-dom";

const ViewProperty = () => {
    const { id } = useParams();

    return (
        <p>ViewProperty component {id}</p>
    )
}

export default ViewProperty;