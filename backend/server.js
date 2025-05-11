import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); // 允許跨域
app.use(express.json()); // 解析 JSON body

app.use('/', (req, res) => {
    res.send('Hello world');
})

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: '缺少 email' });
  }
  console.log('✅ 收到 email:', email);
  res.status(200).json({ message: '訂閱成功！', email });
});

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
})