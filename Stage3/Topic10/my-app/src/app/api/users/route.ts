export async function GET(request: Request) {
  console.log('request', request);

  return Response.json({
    data: [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Jane Smith 3' },
    ],
  });
}
