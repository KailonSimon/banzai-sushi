import Header from './Header';

const Layout = ({children}) => {
    return (
        <>
            <div>
                <main>
                    <Header />
                    {children}
                </main>
                
            </div>
        </>
    )
}

export default Layout
