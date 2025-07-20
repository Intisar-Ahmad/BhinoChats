export default  async function Page({ params }: { params: { topic: string } }) {
    const { topic } =  params;
    // convert urlencoded topic to actual text
    const decodedTopic = decodeURIComponent(topic);


    return (
        <main>
            this is the page where you will discuss the topic you chose: {decodedTopic}
        </main>
    );
}