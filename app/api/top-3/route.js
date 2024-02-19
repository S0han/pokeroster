
export async function GET(req, res) {
    try {
        
    } catch (e) {
        return NextResponse.json(`Webhook error: ${e.message}`, {
            status: 400,
        });
    }
}