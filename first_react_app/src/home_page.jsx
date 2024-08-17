export default function HomePage()
{
    var text="Hellooo";
    return(
        <>
        <h1>Home Page</h1>
        <i>This is Home Page</i>
        <b>Variable value: {text}</b>
        <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="logo" height={200} width={200} />
        </>
        
    );
}