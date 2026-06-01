import React from 'react'

interface Joke {
  id: string
  text: string
  category: string
  isFavorite: boolean
}

interface FavoritesListProps {
  favorites: Joke[]
  onRemove: (id: string) => void
  onClear: () => void
  isEmpty: boolean
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onRemove,
  onClear,
  isEmpty
}) => {
  if (isEmpty) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <span className="text-6xl block mb-4">💔</span>
        <p className="text-gray-600 text-lg">您还没有收藏任何笑话</p>
        <p className="text-gray-500 mt-2">获取一些笑话并点击收藏吧！</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">❤️ 我的收藏 ({favorites.length})</h2>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
        >
          清空全部
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favorites.map((joke, index) => (
          <div
            key={joke.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-red-600"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                {joke.category}
              </span>
              <span className="text-2xl text-gray-400">#{index + 1}</span>
            </div>
            
            <p className="text-gray-800 font-semibold mb-4 leading-relaxed">
              {joke.text}
            </p>
            
            <button
              onClick={() => onRemove(joke.id)}
              className="w-full px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition"
            >
              🗑️ 删除
            </button>
          </div>
        ))}
      </div>

      {favorites.length > 0 && (
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
          <p className="text-green-700 font-semibold">
            ✨ 您已收藏 {favorites.length} 个笑话！
          </p>
        </div>
      )}
    </div>
  )
}

export default FavoritesList
