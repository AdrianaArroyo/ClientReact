import { SuppliesGrid } from '../components/SuppliesGrid';


export const GanbatteStudio = () => {
    return (
        <>
            <a href={`/newSupplie`} className="btn-new btn btn-success">Agregar Suministro</a>
            <hr />
            <hr />
            <hr />
            <ol className="background-pages">
                <div className="tittle-supplies">
                <h4>Suministros: </h4>
                </div>
            < SuppliesGrid/>
            </ol>
        </>
    );
}