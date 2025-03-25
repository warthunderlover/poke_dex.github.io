export const Paging = () => {
    return (
        <section className="pagingHolder">
            <section className="pagingParameters">
                <select>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="50">100</option>
                </select>
            </section>
            <section className="pagingInfo">
                <span>
                    Mostrando Página <input type="number" /> de TotalZ
                </span>
            </section>
            <section className="pagingNavigator">
                <button>Anterior</button>
                <button>Siguiente</button>
            </section>
        </section>
    );
}