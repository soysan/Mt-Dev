import { ProjectProps } from '@/interfaces/projectProps';

const motivation: ProjectProps = {
  title: 'Motivational Speech Wallpaper',
  img: '/motivational.png',
  stacks: ['Html', 'CSS', 'JavaScript'],
  desc: 'dom操作に慣れるためのproject。Pictureと文字列を指定した位置に重ねて表示。'
}
const emotion: ProjectProps = {
  title: 'Emotion Onomatopoeia Dictionary',
  img: '/emotion.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: '感情を表現するカードをクリックすると、その擬音カードのセクションへジャンプする。文字列キーとEmotionObjectのハッシュマップ、連想配列である辞書（単語：説明）、写真用辞書（単語：PicURL）を使用して効率的にレンダリングするプロジェクト。'
}
const vending: ProjectProps = {
  title: 'Vending Machine',
  img: '/vending.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: '自販機のアプリ。商品番号をクリックし商品を買う。 商品画像が商品番号を変えるたびにスライドして選択した商品を表示する。'
}
const battery: ProjectProps = {
  title: 'Battery Finder Program',
  img: '/battery.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: 'Camera brand, modelそれぞれのオブジェクトリスト内と消費電力を0 <= x =< 100 の範囲でUserがスペックを選択し、条件にあったBatteryが画面に表示される。 条件に合わない場合はエラーメッセージが表示される。データ構造のHashMapを使い効率的にリストへアクセスし、重複を削除。 バッテリーの容量によりソートして出力。'
}
const computer: ProjectProps = {
  title: 'Computer Builder',
  img: '/computer.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: 'CPU, GPU, RAM, Storageを選択し、画面に選択したスペックのPCを出力する。APIを使用して非同期処理でデータを取得。PCのSPECを各項目選択。ADD Buttonを押し、画面下部に出力。JSONの扱い。Promise objectの扱い。Lambda関数の使用。HashMapを使用し重複の削除。MVCモデルに沿った設計'
}
const pomodoro: ProjectProps = {
  title: 'Pomodoro Steps',
  img: '/pomodoro.png',
  stacks: ['Swift', 'CocoaPods'],
  desc: 'シンプルなタイマーアプリ。グラフや数字ではなく色や音で知らせるようにしている。作業に集中してほしいため。25分、50分のモードがある。'
}
const clicker: ProjectProps = {
  title: 'Clicker Empire Game',
  img: '/clicker.png',
  stacks: ['React', 'Material-UI', 'JavaScript', 'CSS', 'Html'],
  desc: 'ハンバーガーをクリックしてお金を稼ぎ、アイテムを買って富豪になっていくゲーム。localStorageにデータを保存、削除。'
}
const portfolio: ProjectProps = {
  title: 'Mt-Dev',
  img: '',
  stacks: ['Next.js', 'React', 'Material-UI'],
  desc: 'このポートフォリオ。'
}

export const ProjectsData = {
  motivation: motivation,
  emotion: emotion,
  vending: vending,
  battery: battery,
  computer: computer,
  pomodoro: pomodoro,
  clicker: clicker,
  portfolio: portfolio,
}
