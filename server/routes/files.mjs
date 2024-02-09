import { Router } from 'express'

export const router = Router()

const files = [
  {
    id: 1,
    tags: ['work'],
    timestamp: '2021-05-14T13:22:11',
    fileName: 'report.pdf',
    fileType: 'document',
    fileSize: '2.1 MB',
    downloadUrl: 'https://example.com/files/report.pdf',
  },
  {
    id: 2,
    tags: ['school'],
    timestamp: '2022-08-05T02:18:32',
    fileName: 'presentation.pptx',
    fileType: 'document',
    fileSize: '8.4 MB',
    downloadUrl: 'https://example.com/files/presentation.pptx',
  },
  {
    id: 3,
    tags: ['archive'],
    timestamp: '2020-03-15T09:12:55',
    fileName: 'song.mp3',
    fileType: 'audio',
    fileSize: '4.5 MB',
    downloadUrl: 'https://example.com/files/song.mp3',
  },
  {
    id: 4,
    tags: ['archive'],
    timestamp: '2023-02-11T18:34:29',
    fileName: 'tutorial.mp4',
    fileType: 'video',
    fileSize: '124 MB',
    downloadUrl: 'https://example.com/files/tutorial.mp4',
  },
  {
    id: 5,
    tags: ['work'],
    timestamp: '2022-06-20T05:46:03',
    fileName: 'report2.pdf',
    fileType: 'document',
    fileSize: '1.2 MB',
    downloadUrl: 'https://example.com/files/report2.pdf',
  },
  {
    id: 6,
    tags: ['school'],
    timestamp: '2021-11-12T14:56:27',
    fileName: 'presentation2.pptx',
    fileType: 'document',
    fileSize: '6.7 MB',
    downloadUrl: 'https://example.com/files/presentation2.pptx',
  },
  {
    id: 7,
    tags: ['archive'],
    timestamp: '2019-09-30T21:08:55',
    fileName: 'song2.mp3',
    fileType: 'audio',
    fileSize: '3.1 MB',
    downloadUrl: 'https://example.com/files/song2.mp3',
  },
  {
    id: 8,
    tags: ['archive'],
    timestamp: '2023-01-05T13:22:11',
    fileName: 'video.avi',
    fileType: 'video',
    fileSize: '250 MB',
    downloadUrl: 'https://example.com/files/video.avi',
  },
  {
    id: 9,
    tags: ['school'],
    timestamp: '2023-02-02T10:34:55',
    fileName: 'ebook.pdf',
    fileType: 'document',
    fileSize: '5 MB',
    downloadUrl: 'https://example.com/files/ebook.pdf',
  },
  {
    id: 10,
    tags: ['archive'],
    timestamp: '2022-12-11T19:06:38',
    fileName: 'podcast.mp3',
    fileType: 'audio',
    fileSize: '11 MB',
    downloadUrl: 'https://example.com/files/podcast.mp3',
  },
]

// get all files.
router.get('/', (req, res) => {
  res.send(files)
})

// Get the most recent files api/vi/files/recent?limit=5

router.get('/recent', (req, res) => {
  const limit = req.query.limit || 5
  const recentFiles = files.slice(-limit)
  res.json(recentFiles)
})

// Get file based on type api/vi/files/type/:audio
router.get('/type/:type', (req, res) => {
  const fileType = req.params.type

  const filteredFiles = files.filter((file) => {
    return file.fileType === fileType
  })

  if (filteredFiles.length > 0) {
    res.json(filteredFiles)
  } else {
    res.status(404).send('No files found')
  }
})

// upload new file
router.post('/', (req, res) => {
  files.push(req.body)
  res.send(201)
})
