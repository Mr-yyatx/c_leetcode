import React, { useState, useEffect } from 'react'
import styles from './index.less';
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import Button from '@/components/Button';

export default () => {
  const [editor, setEditor] = useState<any>(null)
  const [html, setHtml] = useState('')

  // 工具栏配置
  const toolbarConfig = {}

  // 编辑器配置
  const editorConfig = {
    placeholder: '请输入内容...'
  }

  // 及时销毁 editor
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  return (
    <div className={styles.page}>
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: '1px solid #ccc' }}
      />
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={(editor: { getHtml: () => React.SetStateAction<string>; }) => setHtml(editor.getHtml())}
        mode="default"
        style={{ height: '300px', overflowY: 'hidden' }}
      />
      <div className={styles.submit}><Button text='发布' /></div>
    </div>
  )
}